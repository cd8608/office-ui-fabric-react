import * as React from 'react';
import { DialogBasicExample } from './examples/Dialog.Basic.Example';
import { DemoPage } from '../../demo/components/DemoPage';
import { IDemoPageProps } from '../../demo/components/DemoPage.types';
import { DialogLargeHeaderExample } from './examples/Dialog.LargeHeader.Example';
import { DialogBlockingExample } from './examples/Dialog.Blocking.Example';
import { DialogStatus } from './Dialog.checklist';

const DialogBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dialog/examples/Dialog.Basic.Example.tsx') as string;
const DialogLargeHeaderExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dialog/examples/Dialog.LargeHeader.Example.tsx') as string;
const DialogBlockingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dialog/examples/Dialog.Blocking.Example.tsx') as string;

export const DialogPageProps: IDemoPageProps = {
  title: 'Dialog',
  componentName: 'Dialog',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Dialog',
  componentStatus: DialogStatus,
  examples: [
    {
      title: 'Default Dialog',
      code: DialogBasicExampleCode,
      view: <DialogBasicExample />
    },
    {
      title: 'Dialog with large header and ChoiceGroup',
      code: DialogLargeHeaderExampleCode,
      view: (
        <>
          <p>
            Use this Dialog sparingly, when calling extra attention to the content. It can be used in situations where
            you want to teach the user something or notify them of an important change.
          </p>
          <DialogLargeHeaderExample />
        </>
      )
    },
    {
      title: 'Blocking Dialog',
      code: DialogBlockingExampleCode,
      view: (
        <>
          <p>
            A blocking Dialog disables all other actions and commands on the page behind it. They should be used very
            sparingly, only when it is critical that the user makes a choice or provides information before they can
            proceed. Blocking Dialogs are generally used for irreversible or potentially destructive tasks.
          </p>
          <DialogBlockingExample />
        </>
      )
    }
  ],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/Dialog/Dialog.types.ts')
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Dialog/docs/DialogOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/Dialog/docs/DialogDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/Dialog/docs/DialogDonts.md'),
  isHeaderVisible: true
};

export const DialogPage = (props: { isHeaderVisible: boolean }) => <DemoPage {...{ ...DialogPageProps, ...props }} />;
