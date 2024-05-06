export interface AddContact {
    status:  string;
    code:    number;
    message: string;
    contact: Contact;
}

export interface Contact {
    name:       string;
    surname:    string;
    city:       string;
    updated_at: Date;
    created_at: Date;
    id:         number;
}
