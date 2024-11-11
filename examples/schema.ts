type UserSchema = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  isActive: boolean;
  profilePicture: string;
  dateOfBirthTimestampWithoutTimezone: Date;
};

type FantasyFootballStatsPlayerSchema = {
  playerId: string;
  name: string;
  team: string;
  position: string;
  points: number;
};

function ThisFunctionHasAReallyLongNameAndItShouldBeShorter() {}
