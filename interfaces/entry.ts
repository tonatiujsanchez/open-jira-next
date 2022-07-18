export interface Entry {
    _id: string;
    description: string;
    createdAd: number;
    status: EntryStatus;  // pending | in-progress | finished
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished'