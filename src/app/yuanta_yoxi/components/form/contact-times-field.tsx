import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Control } from 'react-hook-form';
import { CONTACTS, CONTACTS_LABELS } from './const';
import { FormSchema } from './schema';

type Props = {
  control: Control<FormSchema>;
};

export default function ContactTimesField({ control }: Props) {
  return (
    <FormField
      control={control}
      name="contactTimes"
      render={() => (
        <FormItem className="space-y-3">
          <FormLabel>方便聯絡時間</FormLabel>

          {CONTACTS.map((type) => (
            <FormField
              key={type}
              control={control}
              name="contactTimes"
              render={({ field }) => (
                <FormItem
                  className="flex items-center space-x-3 space-y-0"
                  key={type}
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(type)}
                      onCheckedChange={(checked) =>
                        checked
                          ? field.onChange([...field.value, type])
                          : field.onChange(
                              field.value?.filter((value) => value !== type)
                            )
                      }
                    />
                  </FormControl>
                  <FormLabel className="font-medium">
                    {CONTACTS_LABELS[type]}
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
