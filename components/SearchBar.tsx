"use client"

// import { scrapeAndStoreProduct } from '@/lib/actions';
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';

const isValidAmazonProductURL = (url: string) => {
        try {
                const parsedURL = new URL(url);
                const hostname = parsedURL.hostname;

                if(
                        hostname.includes('amazon.com') || 
                        hostname.includes ('amazon.') || 
                        hostname.endsWith('amazon')
                )  return true;
                
        } catch (error) {
                return false;
        }

        return false;
}

const SearchBar = () => {
        const [searchPrompt, setSearchPrompt] = useState('');
        const [isLoading, setIsLoading] = useState(false);

        const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
                event.preventDefault();

                const isValidLink = isValidAmazonProductURL(searchPrompt);

                if(!isValidLink) return toast.error("Please provide a valid Amazon link")
                
                let loadingToast

                try {
                        setIsLoading(true);
                        loadingToast = toast.loading('Searching..');

                        // Scrape the product page
                        // const product = await scrapeAndStoreProduct(searchPrompt);
                } catch (error) {
                        console.log(error);
                        toast.error("Failed to load data, please try again!")
                } finally {
                        setIsLoading(false);
                        toast.dismiss(loadingToast);

                }
        }

  return (
        <form 
                className="flex flex-wrap gap-4 mt-12" 
                onSubmit={handleSubmit}
        >
                <input 
                        type="text"
                        value={searchPrompt}
                        onChange={(e) => setSearchPrompt(e.target.value)}
                        placeholder="Enter product link"
                        className="searchbar-input"
                />

                <button 
                        type="submit" 
                        className="searchbar-btn "
                        disabled={searchPrompt === ''}
                >
                        {isLoading ? 'Searching...' : 'Search'}
                </button>
        </form>
  )
}

export default SearchBar