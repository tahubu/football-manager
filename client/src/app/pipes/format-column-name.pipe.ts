import { Pipe, PipeTransform } from '@angular/core';

const firstCharToUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

@Pipe({
  name: 'formatColumnName',
  pure: true,
})
export class FormatColumnNamePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if ((/[A-Z]+/g).test(value)) {
      const upperCaseChars = value.match(/([A-Z])/g);
      const result = upperCaseChars.reduce((acc, char) => {
        return acc.replace(char, ` ${char.toLowerCase()}`);
      }, value);
      return firstCharToUpperCase(result);
    } else {
      return firstCharToUpperCase(value);
    }
  }

}
