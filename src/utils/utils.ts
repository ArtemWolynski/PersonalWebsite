export class Utils
{

  static requestId = '';
  /**
   * Filter array by string
   *
   * @param mainArr
   * @param searchText
   * @returns {any}
   */
  public static filterArrayByString(mainArr, searchText): any
  {
    if ( searchText === '' )
    {
      return mainArr;
    }

    searchText = searchText.toLowerCase();

    return mainArr.filter(itemObj => {
      return itemObj.toLowerCase().includes(searchText);
    });
  }

  /**
   * Search in object
   *
   * @param itemObj
   * @param searchText
   * @returns {boolean}
   */
  public static searchInObj(itemObj, searchText): boolean
  {
    for ( const prop in itemObj )
    {
      if ( !itemObj.hasOwnProperty(prop) )
      {
        continue;
      }

      const value = itemObj[prop];

      if ( typeof value === 'string' )
      {
        if ( this.searchInString(value, searchText) )
        {
          return true;
        }
      }

      else if ( Array.isArray(value) )
      {
        if ( this.searchInArray(value, searchText) )
        {
          return true;
        }
      }

      if ( typeof value === 'object' )
      {
        if ( this.searchInObj(value, searchText) )
        {
          return true;
        }
      }
    }
  }

  /**
   * Search in array
   *
   * @param arr
   * @param searchText
   * @returns {boolean}
   */
  public static searchInArray(arr, searchText): boolean
  {
    for ( const value of arr )
    {
      if ( typeof value === 'string' )
      {
        if ( this.searchInString(value, searchText) )
        {
          return true;
        }
      }

      if ( typeof value === 'number' )
      {
        if ( this.searchInString(value.toString(), searchText) )
        {
          return true;
        }
      }

      if ( typeof value === 'object' )
      {
        if ( this.searchInObj(value, searchText) )
        {
          return true;
        }
      }
    }
  }

  /**
   * Search in string
   *
   * @param value
   * @param searchText
   * @returns {any}
   */
  public static searchInString(value, searchText): any
  {
    return value.toLowerCase() === searchText.toLowerCase();
  }

  /**
   * Toggle in array
   *
   * @param item
   * @param array
   */
  public static toggleInArray(item, array): void
  {
    if ( array.indexOf(item) === -1 )
    {
      array.push(item);
    }
    else
    {
      array.splice(array.indexOf(item), 1);
    }
  }

  /**
   * Handleize
   *
   * @param text
   * @returns {string}
   */
  public static handleize(text): string
  {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }


  /**
   * Get highest number in array
   *
   * @param arr
   * @returns {number}
   */
  public static getHighestValueInArray(arr): number {
    let highestNumber = 0;
    for (const item of arr) {
      if (highestNumber < item) {
        highestNumber = item;
      }
    }
    return highestNumber;
  }

  public static findObjectById(objArr, id) {
    return objArr.find(item => item.id === id);
  }

  public static deleteElementFromArray(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
}
