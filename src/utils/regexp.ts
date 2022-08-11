export const REG_EXP = (type: string | null = null): RegExp => {
  let regExp;

  switch (type?.toLowerCase()) {
    case 'name': {
      regExp = /^[A-ZА-Я]([a-zа-я]\D)*/g;
      break;
    }
    case 'login': {
      regExp = /[a-zа-я][a-zа-я-_|\d]*/gi;
      break;
    }
    case 'password': {
      regExp = /(.\S)*/g;
      break;
    }
    case 'email': {
      regExp = /[a-z-\d]*@[a-z-\d]*.[a-z]/gi;
      break;
    }
    case 'phone': {
      regExp = /\+[\d]{1}\s\([\d]{3}\)\s[\d]{3}-[\d]{2}-[\d]{2}/gi;
      break;
    }
    default: {
      regExp = /.*/gi;
      break;
    }
  }

  return regExp;
};
