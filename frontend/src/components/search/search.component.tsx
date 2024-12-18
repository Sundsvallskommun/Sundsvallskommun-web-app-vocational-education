import SearchIcon from '@mui/icons-material/Search';
import { Button, Link, SearchField } from '@sk-web-gui/react';
import { appURL } from '@utils/app-url';
import { addToQueryString } from '@utils/url';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface SearchSuggestion {
  label: string;
  id: number;
}

export const Search: React.FC<{
  className?: string;
  data?: SearchSuggestion[];
  defaultValue?: string;
  /** @default false */
  keepParams?: boolean;
  showLinkToAllEducations?: boolean;
  onReset?: () => void;
}> = ({
  className = '',
  data = undefined,
  defaultValue = null,
  keepParams = false,
  showLinkToAllEducations = true,
  onReset,
}) => {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue ? defaultValue : '');

  const _data: SearchSuggestion[] = data ? data : [];

  const pushQuery = (query?: string) => {
    router.push({
      pathname: '/utbildningar/sok',
      query: keepParams ? addToQueryString({ q: query }) : { q: query },
    });
  };

  const handleOnChange = (e) => {
    if (e.target.value !== query) {
      setQuery(e.target.value);
    }
  };

  const handleOnSelect = (e) => {
    if (e.target.value && e.target.value !== query) {
      pushQuery(e.target.value);
      setTimeout(() => setQuery(''), 100);
    }
  };

  const handleOnReset = () => {
    onReset && onReset();
    setQuery('');
    if (keepParams) {
      pushQuery('');
    }
  };

  const handleOnSearch = (query: string) => {
    if (query) {
      pushQuery(query);
      setQuery('');
    }
  };

  const handleOnSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    pushQuery(query);
    setQuery('');
  };

  useEffect(() => {
    setQuery(defaultValue ?? '');
  }, [defaultValue]);

  return (
    <div className={`${className}`}>
      <div className="mb-sm">
        <label className="text-sm text-label">Sök utbildningar</label>
      </div>
      <form onSubmit={handleOnSubmit} className="flex w-full mb-sm">
        <div className="searchbar">
          <SearchField.Suggestions autofilter={false} size="md">
            <SearchField.SuggestionsInput
              size="md"
              onChange={handleOnChange}
              onSelect={handleOnSelect}
              onReset={handleOnReset}
              value={query}
              showSearchButton={false}
              onSearch={handleOnSearch}
              autoComplete="off"
            />
            <SearchField.SuggestionsList>
              {_data
                .filter((x) => x.label.toLowerCase().includes(query.toLowerCase()))
                .map((suggestion, index) => (
                  <SearchField.SuggestionsOption
                    key={`suggestion-${suggestion.label}-${index}`}
                    value={suggestion.label.toString()}
                  >
                    {suggestion.label}
                  </SearchField.SuggestionsOption>
                ))}
            </SearchField.SuggestionsList>
          </SearchField.Suggestions>
          <Button
            variant="ghost"
            type="submit"
            className="searchbar-button-search"
            leftIcon={<SearchIcon className="text-2xl" />}
          >
            Sök
          </Button>
        </div>
      </form>
      {showLinkToAllEducations ?
        <NextLink href={appURL('/utbildningar/sok')}>
          <Link as="span">Se alla utbildningar</Link>
        </NextLink>
      : null}
    </div>
  );
};

export default Search;
