import chalk from "chalk";
import {select, isCancel} from "@clack/prompts";

export async function runCliMode(){
    while(true){
        const mode= await select({
            message: "Choose specific CLI mode to run:",
            options: [
                {value:"agent", label:"Agent Mode"},
                {value:"plan", label:"Plan Mode"},
                {value:"ask", label:"Ask Mode"},
                {value:"back", label:"← Back to main menu"}
            ]
        });
        if(isCancel(mode) || mode==="back"){
            console.log(chalk.dim("Returning to main menu..."));
            return;
        }

        if(mode==="agent"){
            console.log(chalk.dim("Starting Clawbot in Agent mode..."));
        }
        if(mode==="ask"){
            console.log(chalk.dim("Starting Clawbot in Ask mode..."));
        }
        if(mode==="plan"){
            console.log(chalk.dim("Starting Clawbot in Plan mode..."));
        }
       
    }
}