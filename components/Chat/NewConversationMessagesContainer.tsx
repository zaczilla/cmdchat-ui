import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const DEMO_PROMPTS = [
  'Compose a heartfelt apology email to my boss for missing an important meeting.',
  "Generate a witty toast for my best friend\'s wedding.",
  'Create a catchy slogan for my new eco-friendly laundry detergent.',
  'Draft an engaging social media post announcing the launch of my online store.',
  'Craft a persuasive pitch for my innovative smartphone app to potential investors.',
  'Write an attention-grabbing headline for my blog post on reducing food waste.',
  'Develop a memorable tagline for a charity marathon event.',
  'Design a captivating Instagram caption for my latest travel adventure.',
  'Invent a creative name for a new line of organic skincare products.',
  'Construct an inspiring pep talk for my team before a big game.',
];

type Props = {
  promptOnClick: (prompt: string) => void;
};

const FootNoteMessage: FC = () => {
  const { t } = useTranslation('chat');

  return (
    <div className="px-3 pt-2 pb-3 text-center text-[12px] text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
      <div className="leading-5">
        <a
          href="https://github.com/exploratortech/chat-everywhere"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Chat Everywhere
        </a>{' '}
        by{' '}
        <a
          href="https://exploratorlabs.com"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Explorator Labs
        </a>
        . 
        <br />
        {t('Where the forefront of AI technology meets universal access.')}
      </div>
    </div>
  );
};

export const NewConversationMessagesContainer: FC<Props> = ({
  promptOnClick,
}) => {
  const { t } = useTranslation('prompts');
  const [demoPrompts, setDemoPrompts] = useState<string[]>([]);

  useEffect(() => {
    const prompts = DEMO_PROMPTS.sort(() => Math.random() - 0.5).slice(0, 3);
    setDemoPrompts(prompts);
  }, []);

  return (
    <div>
      <span className="font-semibold">Chat Everywhere</span>
      <div className="mt-2 flex flex-col text-sm">
        {demoPrompts.map((prompt, index) => (
          <div
            key={index}
            className="mb-2 cursor-pointer rounded-md border border-neutral-200 bg-transparent p-1 pr-2 text-neutral-900 dark:border-neutral-600 dark:text-white"
            onClick={() => promptOnClick(t(prompt))}
          >
            {t(prompt)}
          </div>
        ))}
      </div>
      <FootNoteMessage />
    </div>
  );
};
