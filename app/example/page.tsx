import Footer from '@/components/Footer';
import { ExampleOfSaveButton } from '@/examples/SaveButton';

export default function Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen pt-0">
        <h1 className="text-center text-4xl font-bold mb-12">Examples</h1>
        <hr />

        <h2 className="text-center text-2xl font-semibold">Save Button</h2>
        <ExampleOfSaveButton />

        <Footer />
      </div>
    </>
  );
}
