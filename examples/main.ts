function Dog() {
  return {
    makeQuietSoundForDog: () => {
      console.log('woof');
    },
    makeLoudSoundForDog: () => {
      console.log('WOOF WOOF');
    },
  };
}

function Bear() {
  return {
    makeQuietSoundForBear: () => {
      console.log('grrr');
    },
    makeLoudSoundForBear: () => {
      console.log('ROAR');
    },
  };
}
