namespace Models {
    // Server namespace
    namespace Server {
        interface IProject {
            id: string;
            name: string;
            description: string;
            image: string;
            live_demo: string;
            tech_stack: string[];
            readme: string;
            enabled: boolean;
        }
    }

    // Client namespace
    namespace Client {
        interface IProject {
            id: string;
            name: string;
            description: string;
            image: string;
            liveDemo: string;
            techStack: string[];
            readme: string;
        }
    }

}