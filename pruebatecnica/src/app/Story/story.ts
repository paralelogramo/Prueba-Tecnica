export class Story{
    public by: string;
    public id: number;
    public time: number;
    public type: string;
    public title?: string;
    public score?: number;
    public kids?: number[];
    public url?: string;
    public text?: string;
    public parent?: number;
    public descendants?: number;
    public parts?: number[];
    public poll?: number;
    constructor(
    ){}
}