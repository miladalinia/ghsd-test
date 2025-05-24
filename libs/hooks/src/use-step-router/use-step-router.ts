import { useRouter } from 'next/router';
import { useEffect } from 'react';

type UseStepRouterType = { step?: number; replace?: boolean };

const useStepRouter = () => {
  const router = useRouter();

  useEffect(() => {
    const { step, ...rest } = router.query; // Destructure to get 'step' and other query params

    // Only clear 'step' from URL if it exists and is not zero
    // if (step !== undefined && step !== '0') {
    //   router.replace(
    //     {
    //       pathname: router.pathname,
    //       query: rest, // Keep other query parameters
    //     },
    //     undefined,
    //     { shallow: true }
    //   );
    // }
  }, [router.pathname, router.query]);

  const navigate = ({ step, replace }: UseStepRouterType) => {
    const query = { ...router.query };

    // Set 'step' if it's defined
    if (step !== undefined) {
      query.step = String(step); // Convert number to string
    } else {
      delete query.step; // Remove 'step' if it's not defined
    }

    const targetUrl = { pathname: router.pathname, query };

    replace ? router.replace(targetUrl) : router.push(targetUrl);
  };

  return navigate;
};

export default useStepRouter;
