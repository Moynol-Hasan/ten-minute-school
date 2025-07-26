export interface Product {
    code: number;
    data: ProductData;
    error: any[];
    message: string;
    payload: any[]
    status_code: number;
    
}
export interface ProductData {
    slug: string;
    id: string;
    title: string;
    description: string;
    platform: string;
    type: string;
    modality: string;
    media: Media[];
    checklist: Checklist[];
    cta_text: CTATEXT;
    sections: Sections[];
    old_info: {
        cat_id: number;
        course_id: number;
        platform: string;
        skills_cat_id: number;
        slug: string;
    }
    start_at: string;
}
// export interface OldInfor{
//     cat_id: number;
//     course_id: number;
//     platform: string;
//     skills_cat_id: number
//     slug: string;
    
// }
export interface Media {
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url: string;
}

export interface Checklist {
    id: string;
    color: string;
    icon: string;
    list_page_visibility: boolean;
    text: string;
}

export interface Sections {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: CheckListValues[];
}

export interface CheckListValues {
    cta: CTA;
    id: string;
    background_color: string;
    background_img: string;
    checklist_text_color: string;
    end_at: string;
    start_at: string;
    template: string;
    text: string;
    title: string;
    icon: string;
    description: string;
    name: string;
    image: string;
    subtitle: string;
    top_left_icon_img: string;
    thumbnail: string;
    background: Background;
    checklist:[];
    file_url: string;
}

export interface CTATEXT {
    name: string;
    value: string;
}

export interface CTA {
    clicked_url: string;
    color: string;
    text: string;
}

export interface Background {
    image: string;
    primary_color: string;
    secondary_color: string;

}


// export interface CourseDetails {
//     id: string;
    
// }