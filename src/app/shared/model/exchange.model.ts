import { Coin } from "./coin.model";

export class Exchange {
	name?: string;
	isActive?: boolean;
	exchangeUrl?: string;
	coins: Array<Coin>;
	coinPairList?: Array<string>;
}