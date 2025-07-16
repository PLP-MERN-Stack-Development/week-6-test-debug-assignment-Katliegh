import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../hooks/useCounter';

test('increments count', () => {
  const { result } = renderHook(() => useCounter());
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
});
