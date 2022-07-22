
interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string;
    status: string;
    createdAd: number;
    views: number;
}


export const seedData: SeedData = {
    entries: [
        {
            description: 'pending-Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.',
            createdAd: Date.now(),
            status: 'pending',
            views: 0,
        },
        {
            description: 'in-progress-Vitae aliquet nec ullamcorper sit amet. Senectus et netus et malesuada fames ac.',
            createdAd: Date.now() - 1000000,
            status: 'in-progress',
            views: 0,
        },
        {
            description: 'finished-Ultrices mi tempus imperdiet nulla. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim.',
            createdAd: Date.now() - 100000,
            status: 'finished',
            views: 0,
        },
    ]
}



