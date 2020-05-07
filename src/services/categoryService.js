export const categories = [
    { id: 1, name: 'London'},
    { id: 2, name: 'Brighton'},
    { id: 3, name: 'Eastbourne'},
    { id: 4, name: 'Tokyo' },
    { id: 5, name: 'Other' }
  ];
  
  export function getCategories() {
    return categories.filter(c => c);
  }
  
