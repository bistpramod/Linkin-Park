import * as fs from "fs/promises";

try {
    const files = await fs.readdir("C:/nodejs");

    for (const file of files) {
        console.log(file);
    }
} catch (error) {
    console.log(error);
}
