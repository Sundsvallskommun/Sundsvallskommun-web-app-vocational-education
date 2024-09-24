import { Checkbox, Divider, FormControl, FormLabel, useThemeQueries } from '@sk-web-gui/react';
import { useFormContext } from 'react-hook-form';
import FilterPopup from './filter-popup.component';
import { useFiltersContext } from '@contexts/filters.context';
import { getFormattedLabelFromValue } from '@utils/labels';
import { defaultUseFormSetValueOptions } from '@utils/forms';

export const studyLocationFilterPlaceholder = 'Kommun(er)';

export default function StudyLocationInput({ showLabel = false, label = studyLocationFilterPlaceholder, size = 'sm' }) {
  const { register, watch, setValue } = useFormContext();
  const { isPhone } = useThemeQueries();
  const { filters } = useFiltersContext();

  const handleChangeAll = () => {
    if (filters?.studyLocation?.every((studyLocation) => watch().studyLocation?.includes(studyLocation))) {
      setValue('studyLocation', [], defaultUseFormSetValueOptions);
    } else {
      setValue('studyLocation', filters?.studyLocation, defaultUseFormSetValueOptions);
    }
  };

  const isIndeterminate =
    watch().studyLocation?.length > 0 &&
    !filters?.studyLocation?.every((studyLocation) => watch().studyLocation?.includes(studyLocation));

  return (
    <div>
      {(isPhone || showLabel) && (
        <FormLabel htmlFor="studyLocation" className="mb-sm">
          {label}
        </FormLabel>
      )}
      <FilterPopup label={label}>
        <FormControl fieldset id="studyLocation">
          <Checkbox.Group size={size as 'sm' | 'md' | 'lg'}>
            <Checkbox
              checked={watch().studyLocation?.length > 0}
              onChange={handleChangeAll}
              indeterminate={isIndeterminate}
            >
              Välj alla
            </Checkbox>
            <Divider className="-mt-[.4rem] mb-0" />

            {filters?.studyLocation?.map((value) => (
              <Checkbox key={`${value}`} labelPosition="right" {...register('studyLocation')} value={value}>
                {getFormattedLabelFromValue(value)}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </FormControl>
      </FilterPopup>
    </div>
  );
}
