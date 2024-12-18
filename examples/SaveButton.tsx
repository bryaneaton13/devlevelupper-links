'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

interface SaveButtonProps extends ButtonProps {
  onSave: () => Promise<void>;
}

// Extending the button component to put a loader in the button when saving
export default function SaveButton({ onSave, ...rest }: SaveButtonProps) {
  const [isSaving, setIsSaving] = useState(false);

  return (
    <Button
      onClick={async () => {
        setIsSaving(true);
        try {
          await onSave();
        } finally {
          setIsSaving(false);
        }
      }}
      disabled={isSaving}
      // className="transition-all hover:scale-110 focus:scale-110"
      {...rest}
      // className="w-36"
      className={cn('transition-all hover:scale-110 focus:scale-110 w-36', rest.className)}
    >
      {isSaving ? (
        <>
          <Loader2 className="animate-spin" />
          <span className="ml-2">Saving</span>
        </>
      ) : (
        'Save'
      )}
    </Button>
  );
}

async function save() {
  // simulate a slow save
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

export function ExampleOfSaveButton() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <SaveButton onSave={save} />
      <SaveButton onSave={save} className="w-12" />
      <SaveButton onSave={save} variant="outline" />
      <SaveButton onSave={save} variant="secondary" />
      <SaveButton onSave={save} variant="destructive" />
    </div>
  );
}
