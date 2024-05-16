export class PhoneService {
  checkPhone = (value) => {
    if (value.length !== 11) {
      return false;
    }

    return true;
  };
}
