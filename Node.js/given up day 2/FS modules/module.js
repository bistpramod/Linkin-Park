// fs = file system module
import fs from 'fs/promises';

try {
    await fs.mkdir(
        'C:/Users/ACER/Desktop/Node.js/given up day 2/FS modules/newFolder',
        { recursive: true }
    );
    console.log('Folder created successfully');
} catch (err) {
    console.log('Error:', err);
}
