import { FeatureListTypes } from "@/stores/useListStore";

export const list: FeatureListTypes[] = [
    // tools
    {
        category: "tools",
        label: "Translate button",
        value: "translate_button",
        status: false,
        description: "Adds post translation to Persian",
    },
    // {
    //     category: "tools",
    //     label: "Profile note",
    //     value: "profile_note",
    //     status: false,
    //     description: "Custom profile notes",
    // },
    {
        category: "tools",
        label: "Delete button for your posts",
        value: "delete_button_for_your_posts",
        status: false,
        description: "Quick post deletion",
    },
    {
        category: "tools",
        label: "Remove post Ads",
        value: "remove_post_ads",
        status: false,
        description: "Removes ads",
    },
    // hideElements
    {
        category: "hideElements",
        label: "Hide title notification",
        value: "hide_title_notification",
        status: false,
        description: "Removes red dot alert from title",
    },
    {
        category: "hideElements",
        label: "Hide notifications",
        value: "hide_notifications",
        status: false,
        description: "Hides notifications icon",
    },
    {
        category: "hideElements",
        label: "Hide notifications number",
        value: "hide_notifications_number",
        status: false,
        description: "Hides notification count",
    },
    {
        category: "hideElements",
        label: "Hide liked notifications",
        value: "hide_liked_notifications",
        status: false,
        description: "Hides like alerts",
    },
    {
        category: "hideElements",
        label: "Hide messages",
        value: "hide_messages",
        status: false,
        description: "Hides message icon",
    },
    {
        category: "hideElements",
        label: "Hide trends",
        value: "hide_trends",
        status: false,
        description: "Removes trends panel",
    },
    {
        category: "hideElements",
        label: "Hide search",
        value: "hide_search",
        status: false,
        description: "Conceals search",
    },
    {
        category: "hideElements",
        label: "Hide people you know",
        value: "hide_people_you_may_know",
        status: false,
        description: "Removes suggested users",
    },
    {
        category: "hideElements",
        label: "Hide new posts notification",
        value: "hide_new_posts_notification",
        status: false,
        description: "Hides new post alerts",
    },
    {
        category: "hideElements",
        label: "Other things",
        value: "other_things",
        status: false,
        description: "other things on the screen",
    },
    {
        category: "hideElements",
        label: "Hide qouted inqoutes page",
        value: "hide_qouted_inqoutes_page",
        status: false,
        description: "Hides qouted tweets in qoutes page",
    },{
        category: "hideElements",
        label: "Hide liked notifictations",
        value: "hide_liked_notifictations",
        status: false,
        description: "Hides liked notifictations",
    },
    {
        category: "hideElements",
        label: "Hide Grok",
        value: "hide_grok",
        status: false,
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