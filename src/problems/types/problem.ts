export type Problem = {
	id: string;
	slug: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};

export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

// local problem data
export type ProblemElement = {
	id: string;
	slug: string;
	title: string;
	problemStatement: string;
	examples: Example[];
	constraints: string;
	order: number;
	starterCode: string;
	handlerFunction: ((fn: any) => boolean) | string;
	starterFunctionName: string;
};

export type DBProblem = {
	handlerFunction?: any;
	id: string;
	title: string;
	category: string;
	difficulty: string;
	likes?: number;
	dislikes?: number;
	order: number;
	videoId?: string;
	link?: string;
};
