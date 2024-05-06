export interface GetContacts {
    status:   string;
    code:     number;
    contacts: Contacts;
}

export interface Contacts {
    current_page:   number;
    data:           Contact[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          Link[];
    next_page_url:  string;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
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

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
