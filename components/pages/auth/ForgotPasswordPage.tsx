import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

const ForgotPasswordPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { resetPassword, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await resetPassword(email);
            setIsSubmitted(true);
            setIsLoading(false);
        } catch (error: any) {
            console.error("Reset password error:", error);
            let message = "Failed to send reset email. Please try again.";
            
            if (error.code === 'auth/user-not-found') {
                message = "No account found with this email address.";
            } else if (error.code === 'auth/invalid-email') {
                message = "Please enter a valid email address.";
            } else if (error.code === 'auth/too-many-requests') {
                message = "Too many requests. Please try again later.";
            }
            
            setError(message);
            setIsLoading(false);
        }
    };

    const handleSocialLogin = async () => {
        setIsLoading(true);
        try {
            await loginWithGoogle();
            navigate('/');
        } catch (error: any) {
            console.error("Social login error:", error);
            if (error.code === 'auth/popup-closed-by-user') {
                setError("Login window was closed. Please try again.");
            } else {
                setError(error.message || "Google login failed.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-slate-50 px-4 py-12">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 max-w-md w-full p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                {!isSubmitted ? (
                    <>
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-slate-900 mb-2">Reset Password</h1>
                            <p className="text-slate-500">Enter your email address and we'll send you a link to reset your password.</p>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                    <input
                                        type="email"
                                        required
                                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                                        placeholder="you@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    "Send Reset Link"
                                )}
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-slate-500">Or try another way</span>
                            </div>
                        </div>

                        <button
                            onClick={handleSocialLogin}
                            type="button"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors disabled:opacity-70"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span className="text-sm font-semibold text-slate-600">Sign in with Google</span>
                        </button>
                    </>
                ) : (
                    <div className="text-center py-4">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Check Your Email</h2>
                        <p className="text-slate-500 mb-8">
                            We've sent a password reset link to <span className="font-semibold text-slate-900">{email}</span>. 
                            <br /><br />
                            <span className="text-xs italic">Note: If you usually sign in with Google, you can still do so. This link allows you to set a password for direct email login.</span>
                        </p>
                        <Link 
                            to="/login" 
                            className="inline-flex items-center text-blue-600 font-bold hover:underline"
                        >
                            <ArrowLeft className="mr-2" size={18} /> Back to Login
                        </Link>
                    </div>
                )}

                {!isSubmitted && (
                    <div className="mt-8 text-center">
                        <Link to="/login" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 transition-colors">
                            <ArrowLeft className="mr-2" size={16} /> Back to Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
