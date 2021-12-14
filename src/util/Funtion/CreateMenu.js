export function CreateMenu(data,parent_id = 0,level = "",menu = []){
    const listLessons = data;

    listLessons.forEach(lesson => {
        if(lesson.parent_id === parent_id){
            menu.push({...lesson,name : `${level}${lesson.name}`})
            CreateMenu(data,lesson.id,level+"-",menu);
        }
    });
    
    return menu;
}