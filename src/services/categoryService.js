export const categories = [
    { id: 1, name: 'Holidays'},
    { id: 2, name: 'Short Breaks'},
    { id: 3, name: 'Destinationss'},
    { id: 3, name: 'Restaurants' }
  ];
  
  export function getCategories() {
    return categories.filter(c => c);
  }
  