const { getAllDatasetSiteUrls } = require('@openactive/dataset-utils');

async function fetchDatasetUrls() {
  try {
    const { urls, errors } = await getAllDatasetSiteUrls();

    console.log(`Retrieved ${urls.length} dataset URLs`);
    if (errors.length > 0) {
      console.error(`${errors.length} errors encountered during retrieval:`);
      errors.forEach(error => {
        console.error(`- [${error.status}] ${error.url}: ${error.message}`);
      });
    }
  } catch (error) {
    console.error("Failed to fetch dataset URLs:", error);
  }
}

fetchDatasetUrls();


