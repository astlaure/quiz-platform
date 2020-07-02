export interface User {
    username: string;
    role: 'USER' | 'ADMIN' | 'ANONYMOUS';
}

export interface Choice {
    id: number;
    value: string;
    points: number;
    answer: boolean;
    response: string;
}

export interface Question {
    value: string;
    type: 'SINGLE' | 'MULTI' | 'LONG';
    choices: Choice[];
}

export interface Quiz {
    name: string;
    date: Date;
    questions: Question[];
}