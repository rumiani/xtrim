export interface FeatureListTypes {
    category: "tools" | "hideElements",
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
        label: "Hide search",
        value: "hide_search",
        status: true,
        description: "Conceals search",
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
    },
    {
        category: "hideElements",
        label: "Hide qouted inqoutes page",
        value: "hide_qouted_inqoutes_page",
        status: true,
        description: "Hides qouted tweets in qoutes page",
    },{
        category: "hideElements",
        label: "Hide liked notifictations",
        value: "hide_liked_notifictations",
        status: true,
        description: "Hides liked notifictations",
    },
    {
        category: "hideElements",
        label: "Hide Grok",
        value: "hide_grok",
        status: true,
        description: "Hides Grok",
    },
    {
        category:"hideElements",
        label:"Hide premium",
        value:"hide_premium",
        status:true,
        description:"Hides premium"
    },
    {
        category:"hideElements",
        label:"hide tweet engagement",
        value:"hide_tweet_engagement",
        status:true,
        description:"Hides tweet engagement"
    }

];