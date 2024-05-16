export class PersonalService {
  checkPersonal = (value) => {
    const splitValue = value.split(/(-)/);

    if (!(splitValue[0].length === 6 && splitValue[2].length === 7)) {
      return false;
    }

    return `${splitValue[0]}-${splitValue[2][0].padEnd(6, "*")}`;
  };
}
