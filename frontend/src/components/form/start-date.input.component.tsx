import { DatePicker, FormControl, FormLabel, useThemeQueries } from '@sk-web-gui/react';
import { useFormContext } from 'react-hook-form';
import FilterPopup from './filter-popup.component';

const startDatePlaceholder = 'Start från';

export default function StartDateInput({ label = startDatePlaceholder, showLabel = false, size = 'sm' }) {
  const { register } = useFormContext();
  const { isPhone } = useThemeQueries();

  return (
    <div className="relative">
      {(isPhone || showLabel) && (
        <FormLabel htmlFor="startDate" className="mb-sm">
          {label}
        </FormLabel>
      )}
      <FilterPopup label={label}>
        <FormControl id="startDate">
          <DatePicker size={size as 'sm' | 'md' | 'lg'} {...register('startDate')} />
        </FormControl>
      </FilterPopup>
    </div>
  );
}
