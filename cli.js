class Cli {
    /**
     * Recovers the identifier of the person for whom we are looking for the name
     * The identifier must be a positive integer and must be in the arguments of the command line
     * 
     * @returns {number} The identifier of the person searched
     */
    static getId(){
        const arg = process.argv.slice(2);
        if (arg.length !== 1) throw new SyntaxError("Invalid number of arguments");
        if (!Number.isSafeInteger(Number(arg[0]))) throw new SyntaxError("Invalid id");
        return Number(arg[0]);
    }
}

module.exports = Cli;