export const filterOptionBySearchTerm = (dropdownOptions: string[], userSearchTerm: string, optionsSelected: string[]) => {
    const filteredOptions = dropdownOptions.filter((value) => {
        const option =  value.toLowerCase();
        const userSearchText = userSearchTerm.toLowerCase();
    
        return option.includes(userSearchText) && !optionsSelected.includes(value);
    });

    return filteredOptions;
}