export type Flag = {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
}

export type FlagKeys =
    | "explicit"
    | "nsfw"
    | "political"
    | "racist"
    | "sexist"
    | "religious";

export type Category = 
    |"Any" 
    | "Misc" 
    | "Programming" 
    | "Dark" 
    | "Pun" 
    | "Spooky" 
    | "Christmas";

export type Joke = {
    id: number;
    category: Category;
    flags: Flag;
    setup?: string;
    delivery?: string;
    joke?: string;
    safe: boolean;
    lang: "cs" | "de" | "en" | "es" | "fr" | "pt";
    type: "single" | "twopart";
};