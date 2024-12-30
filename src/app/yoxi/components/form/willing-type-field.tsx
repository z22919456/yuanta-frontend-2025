import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Control } from 'react-hook-form';
import { LOCATIONS, LOCATIONS_LABELS, WILLING_TYPES } from './const';
import { FormSchema } from './schema';

type Props = {
  control: Control<FormSchema>;
};

const WillingTypeField = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="willingTypes"
      render={() => (
        <FormItem className="space-y-3">
          <FormLabel>我有意願...</FormLabel>

          <FormField
            control={control}
            name="willingTypes"
            render={({ field }) => (
              <>
                <FormItem
                  className="flex items-center space-x-3 space-y-0"
                  key={WILLING_TYPES[0]}
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(WILLING_TYPES[0])}
                      onCheckedChange={(checked) =>
                        checked
                          ? field.onChange([...field.value, WILLING_TYPES[0]])
                          : field.onChange(
                              field.value?.filter(
                                (value) => value !== WILLING_TYPES[0]
                              )
                            )
                      }
                    />
                  </FormControl>
                  <FormLabel className="font-medium">期貨開戶</FormLabel>
                </FormItem>
                {/* 請勾選離您最近的地區 */}
                {field.value?.includes(WILLING_TYPES[0]) && (
                  <FormField
                    control={control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="ml-8 space-y-3">
                        <FormLabel>
                          請勾選地區，將有專人聯繫並協助(線上或線下)開戶
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                            className="flex flex-wrap space-y-1"
                          >
                            {LOCATIONS.map((location) => (
                              <FormItem
                                className="flex items-center space-x-3 space-y-0"
                                key={location}
                              >
                                <FormControl>
                                  <RadioGroupItem value={location} />
                                </FormControl>
                                <FormLabel className="font-medium">
                                  {LOCATIONS_LABELS[location]}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </>
            )}
          />
          <FormField
            control={control}
            name="willingTypes"
            render={({ field }) => (
              <FormItem
                className="flex items-center space-x-3 space-y-0"
                key={WILLING_TYPES[1]}
              >
                <FormControl>
                  <Checkbox
                    checked={field.value?.includes(WILLING_TYPES[1])}
                    onCheckedChange={(checked) =>
                      checked
                        ? field.onChange([...field.value, WILLING_TYPES[1]])
                        : field.onChange(
                            field.value?.filter(
                              (value) => value !== WILLING_TYPES[1]
                            )
                          )
                    }
                  />
                </FormControl>
                <FormLabel className="font-medium">差價契約 CFD 開戶</FormLabel>
              </FormItem>
            )}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default WillingTypeField;
