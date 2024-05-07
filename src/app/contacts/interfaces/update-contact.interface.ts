export interface UopdateContact {
    status:  string;
    code:    number;
    message: string;
    contact: Contact;
}

export interface Contact {
    id:         number;
    name:       string;
    surname:    string;
    city:       string;
    created_at: Date;
    updated_at: Date;
}
