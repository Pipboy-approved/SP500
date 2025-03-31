import axios from 'axios';

const url = 'https://www.msn.com/en-xl/money/portfolio?tab=Related&id=a33k6h&ocid=ansMSNMoney11&duration=1D&src=b_secdans&relatedQuoteId=a33k6h&relatedSource=MlAl';

export const getSp500Index = async (): Promise<string> => {
  try {
    const response = await axios.get(url);
    const parser = new DOMParser();
    const doc = parser.parseFromString(response.data, 'text/html');
    const mainPriceElement = doc.querySelector('.mainPrice');
    return mainPriceElement ? mainPriceElement.textContent || 'N/A' : 'N/A';
  } catch (error) {
    console.error('Error fetching S&P 500 index:', error);
    return 'Error fetching data';
  }
}; 