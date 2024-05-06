export interface GetContactByID {
    status:  string;
    code:    number;
    contact: Contact;
}

export interface Contact {
    id:         number;
    name:       string;
    surname:    string;
    city:       string;
    created_at: Date;
    updated_at: Date;
    phones:     Address[];
    emails:     Address[];
    addresses:  Address[];
}

export interface Address {
    id:         number;
    address?:   string;
    contact_id: number;
    created_at: Date;
    updated_at: Date;
    email?:     string;
    phone?:     string;
}
