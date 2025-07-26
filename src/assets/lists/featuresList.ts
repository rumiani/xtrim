export interface FeatureListTypes {
    category: string,
    label: string,
    value: string,
    status: boolean
}
export const list: FeatureListTypes[] = [
    // tools
    {
        category: "tools",
        label: "Translate button",
        value: "translate_button",
        status: false
    },
    {
        category: "tools",
        label: "Accounts note",
        value: "accounts_note",
        status: false
    },
    {
        category: "tools",
        label: "Delete button for your tweets",
        value: "delete_button_for_your_tweets",
        status: false
    },
    {
        category: "tools",
        label: "Remove tweet Ads",
        value: "Remove_tweet_ads",
        status: false
    },
    // hideElements
    { category: "hideElements", label: "Hide title notification", value: "hide_title_notification", status: false },
    { category: "hideElements", label: "Hide notifications", value: "hide_notifications", status: false },
    { category: "hideElements", label: "Hide notifications number", value: "hide_notifications_number", status: false },
    { category: "hideElements", label: "Hide liked notifications", value: "hide_liked_notifications", status: false },
    { category: "hideElements", label: "Hide messages", value: "hide_messages", status: false },
    { category: "hideElements", label: "Hide trends", value: "hide_trends", status: false },
    { category: "hideElements", label: "Hide search bar", value: "hide_search_bar", status: false },
    { category: "hideElements", label: "Hide messages sidebar", value: "hide_messages_sidebar", status: false },
    { category: "hideElements", label: "Hide people you know", value: "hide_people_you_may_know", status: false },
    { category: "hideElements", label: "Hide new tweets notification", value: "hide_new_tweets_notification", status: false },

]