import { singletonPattern } from '@beecode/msh-util/singleton/pattern';
import path from 'path';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const constant = singletonPattern(() => {
    return {
        configFilePath: path.resolve(process.cwd(), './.base-frame'),
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQTtBQUN0RSxPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7QUFFdkIsNEVBQTRFO0FBQzVFLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7SUFDN0MsT0FBTztRQUNOLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxlQUFlLENBQUM7S0FDbkQsQ0FBQTtBQUNYLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ2xldG9uUGF0dGVybiB9IGZyb20gJ0BiZWVjb2RlL21zaC11dGlsL3NpbmdsZXRvbi9wYXR0ZXJuJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZVxuZXhwb3J0IGNvbnN0IGNvbnN0YW50ID0gc2luZ2xldG9uUGF0dGVybigoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Y29uZmlnRmlsZVBhdGg6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi8uYmFzZS1mcmFtZScpLFxuXHR9IGFzIGNvbnN0XG59KVxuIl19