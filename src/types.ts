export interface HeaderLinks{
    title: string,
    url: string,
    exact: boolean,
}

export interface ProductCategories{
    title: string,
    url: string,
    imgs?: string[];
}

export interface Tasks{
    title: string,
    description: string,
    exTime: string,
    status: string,
}

export enum Status{
    ToDo = 'To Do',
    InProgress = 'In Progress',
    Done = 'Done'
}
