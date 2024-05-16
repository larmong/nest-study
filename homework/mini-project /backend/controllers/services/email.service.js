export class EmailService {
  checkEmail = (value) => {
    if (!value.includes("@")) {
      return false;
    }

    return true;
  };
}
