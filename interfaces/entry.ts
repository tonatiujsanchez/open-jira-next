export interface Entry {
    _id: string;
    description: string;
    createdAd: number;
    status: EntryStatus;  // pending | in-progress | finished
    views: number;
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished'