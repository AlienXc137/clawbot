import chalk from "chalk";
import { text } from "stream/iter";
import { defaultAgentConfig } from "./types";

export async function runAgentMode(){
    console.log(chalk.bold("\n🤖 Agent Mode\n"));

    const goal= await text({
        message: "What is the goal you want Agent to achieve?",
        placeholder: "Enter your goal here..."
    });

    if(isCancel(goal) || !goal.trim()){
        console.log(chalk.dim("Exiting..."));
        return;
    }

    const config= defaultAgentConfig();
}