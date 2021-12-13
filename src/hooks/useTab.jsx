import { useState } from "react";


const useTab = (activeTab1) => {

    const [activeTab, setActiveTab] = useState(activeTab1)

    const toggleTab = (tabName) => {
        setActiveTab(tabName)
    }

    return {
        toggleTab,
        activeTab
    }
}
export default useTab;