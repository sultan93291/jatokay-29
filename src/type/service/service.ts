export type TService = {
    image: string;
    svg: string;
    name: string;
    description: string;
    what_included: string[];
    why_this_service_matters: string;
    service_details_card: {
        duration: string;
        price_range: string;
        action_buttons: {
            text: string;
            type: "primary" | "secondary";
        }[];
    };
};