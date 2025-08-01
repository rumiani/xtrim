export interface FeatureListTypes {
    category: string,
    label: string,
    value: string,
    status: boolean
    description: string
}

export const list: FeatureListTypes[] = [
    // tools
    {
        category: "tools",
        label: "Translate button",
        value: "translate_button",
        status: true,
        description: "Adds post translation to Persian",
    },
    {
        category: "tools",
        label: "Profile note",
        value: "profile_note",
        status: true,
        description: "Custom profile notes",
    },
    {
        category: "tools",
        label: "Delete button for your posts",
        value: "delete_button_for_your_posts",
        status: true,
        description: "Quick post deletion",
    },
    {
        category: "tools",
        label: "Remove post Ads",
        value: "remove_post_ads",
        status: true,
        description: "Removes ads",
    },
    // hideElements
    {
        category: "hideElements",
        label: "Hide title notification",
        value: "hide_title_notification",
        status: true,
        description: "Removes red dot alert from title",
    },
    {
        category: "hideElements",
        label: "Hide notifications",
        value: "hide_notifications",
        status: true,
        description: "Hides notifications icon",
    },
    {
        category: "hideElements",
        label: "Hide notifications number",
        value: "hide_notifications_number",
        status: true,
        description: "Hides notification count",
    },
    {
        category: "hideElements",
        label: "Hide liked notifications",
        value: "hide_liked_notifications",
        status: true,
        description: "Hides like alerts",
    },
    {
        category: "hideElements",
        label: "Hide messages",
        value: "hide_messages",
        status: true,
        description: "Hides message icon",
    },
    {
        category: "hideElements",
        label: "Hide trends",
        value: "hide_trends",
        status: true,
        description: "Removes trends panel",
    },
    {
        category: "hideElements",
        label: "Hide search bar",
        value: "hide_search_bar",
        status: true,
        description: "Conceals search bar",
    },
    {
        category: "hideElements",
        label: "Hide messages sidebar",
        value: "hide_messages_sidebar",
        status: true,
        description: "Hides messages sidebar",
    },
    {
        category: "hideElements",
        label: "Hide people you know",
        value: "hide_people_you_may_know",
        status: true,
        description: "Removes suggested users",
    },
    {
        category: "hideElements",
        label: "Hide new posts notification",
        value: "hide_new_posts_notification",
        status: true,
        description: "Hides new post alerts",
    },
    {
        category: "hideElements",
        label: "Other things",
        value: "other_things",
        status: true,
        description: "other things on the screen",
    }
];