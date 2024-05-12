import * as FileSysytem from 'expo-file-system';
import { Asset } from 'expo-asset';

//DB loader
export const loadDatabase = async () => {
  const dbName = 'budgetApp.db';
  const dbAsset = require('../assets/db/budgetApp.db');
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSysytem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSysytem.getInfoAsync(dbFilePath);
  if (!fileInfo.exists) {
    await FileSysytem.makeDirectoryAsync(
      `${FileSysytem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSysytem.downloadAsync(dbUri, dbFilePath);
  }
};
